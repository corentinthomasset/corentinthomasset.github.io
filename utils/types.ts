export interface Project {
  title: string
  description: string
  date: string,
  affiliation?: string,
  thumbnailMedia: string,
  thumbnailPoster: string,
  links: Link[],
}

export interface TimelineItem {
  title: string,
  date: string
}

export interface Link {
    url: string,
    icon: string;
    label?: string
}