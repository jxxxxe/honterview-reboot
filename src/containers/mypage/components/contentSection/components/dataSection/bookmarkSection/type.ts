export interface MyPageBookmarkDataType {
  id: number;
  content: string;
  heartsCount?: number;
  categoryNames: string[];
}

export interface MyPageBookmarkDataSectionProps {
  isVisible: boolean;
}
