declare module '@mealection/react-native-boring-avatars' {
  import * as React from 'react';

  export type AvatarVariant =
    | 'beam'
    | 'bauhaus'
    | 'pixel'
    | 'ring'
    | 'sunset';

  export interface AvatarProps {
    /** Diameter / side length in px (default 40) */
    size?: number;
    /** Seed string that makes the avatar deterministic */
    name: string;
    /** One of the variants above (default 'beam') */
    variant?: AvatarVariant;
    /** Optional custom 5-colour palette  */
    colors?: string[];
  }

  const Avatar: React.FC<AvatarProps>;
  export default Avatar;
}
