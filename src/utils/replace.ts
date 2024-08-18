export type Replace<OriginalType, RewplaceType> = Omit<
  OriginalType,
  keyof RewplaceType
> &
  RewplaceType;
