
export interface IProject {
  src: string;
  href: string; 
  title: string;
  subtitle: string;
  frameworks: {
    src: string;
    name: string;
  }[]
}