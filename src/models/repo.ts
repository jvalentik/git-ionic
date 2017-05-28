import { Owner } from './owner';
/**
 * Created by johny on 28/05/2017.
 */
export interface Repo {
  id: number,
  owner: Owner,
  name: string,
  full_name: string,
  description: string,
  private: boolean,
  fork: boolean,
  url: string
  html_url: string
}
