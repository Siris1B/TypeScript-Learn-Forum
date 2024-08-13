// <Адреса сторінки, позиція>
type ScrollSchema = Record<string, number>;

export interface ScrollSaveSchema {
  scroll: ScrollSchema;
}
