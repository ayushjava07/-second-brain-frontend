type IconSize = 'sm' | 'md' | 'lg';
export interface IconProps{
    size:IconSize;
}
export const iconSizeVariants:Record<IconSize,string> = {
    sm: "size-4 ",
    md: "size-6",
    lg: "size-8"
}