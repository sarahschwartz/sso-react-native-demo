import TransactionCard from '@/components/TransactionCard';
import { useTxns } from '@/contexts/TxnContext';
import { getPrices } from '@/utils/prices';
import { PriceObject, Tx } from '@/types/types';
import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HomeScreen() {
  const [filter, setFilter] = useState<'all' | 'mine'>('all');
  const [prices, setPrices] = useState<PriceObject | undefined>(undefined);

  const { txns } = useTxns();

  useEffect(() => {
    const fetchPrices = async () => {
      const prices = await getPrices();
      if (!prices) {
        console.log('No prices found');
        return;
      }
      console.log("prices:", prices)
      setPrices(prices);
    };
    fetchPrices();
  }, []);


  const ListHeader = () => (
    <View style={styles.header}>
      <Text style={styles.title}>ZKsync SSO Pay</Text>
    </View>
  );

  const FilterTabs = () => (
    <View style={styles.filterContainer}>
      <TouchableOpacity
        style={[styles.filterTab, filter === 'all' && styles.activeFilterTab]}
        onPress={() => setFilter('all')}
      >
        <Text
          style={[
            styles.filterText,
            filter === 'all' && styles.activeFilterText,
          ]}
        >
          All
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.filterTab, filter === 'mine' && styles.activeFilterTab]}
        onPress={() => setFilter('mine')}
      >
        <Text
          style={[
            styles.filterText,
            filter === 'mine' && styles.activeFilterText,
          ]}
        >
          Mine
        </Text>
      </TouchableOpacity>
    </View>
  );

  const reversedTxns = txns ? [...txns].reverse() : [];
  return (
    <SafeAreaView style={styles.container}>
      {reversedTxns && reversedTxns.length > 0 ? (
        <FlatList
          data={reversedTxns}
          keyExtractor={(item) => item?.hash as string}
          renderItem={({ item }) => {
            if (filter === 'mine' && !item.isCurrentUser) return null;
            return (
              <TransactionCard
                transaction={item as Tx}
                ethPrice={
                  prices ? parseFloat(prices?.prices[0].value) : undefined
                }
              />
            );
          }}
          contentContainerStyle={styles.listContent}
          ListHeaderComponent={
            <>
              <ListHeader />
              <FilterTabs />
            </>
          }
          showsVerticalScrollIndicator={false}
        />
      ) : (
        <View 
        style={styles.emptyContainer}
        >
          <Text 
          style={styles.filterText}
          >
            No transactions found</Text>
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9FAFB',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 8,
    paddingBottom: 16,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
    fontFamily: 'Inter_700Bold',
    color: '#3B82F6',
  },
  headerActions: {
    flexDirection: 'row',
  },
  iconButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F3F4F6',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  filterContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    backgroundColor: 'white',
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F3F4F6',
    marginBottom: 8,
  },
  filterTab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    marginRight: 8,
    borderRadius: 16,
    backgroundColor: '#F3F4F6',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  activeFilterTab: {
    backgroundColor: '#3B82F6',
  },
  filterText: {
    fontSize: 14,
    fontFamily: 'Inter_500Medium',
    color: '#4B5563',
  },
  activeFilterText: {
    color: 'white',
  },
  listContent: {
    padding: 16,
    paddingTop: 8,
  },
});
