import { IMatchWords } from './MatchWords';

export const transformWords = (match: {
  id: number,
  eng: string,
  ukr: string
}[]) : { wordsUkr: { id: number, ukr: string}[], wordsEng: { id: number, eng: string}[] } => {

  const wordsUkr: { id: number, ukr: string}[] = match.map(({ id, ukr }) => ({ id, ukr })).sort(() => Math.random() - 0.5);
  const wordsEng: { id: number, eng: string}[] = match.map(({ id, eng }) => ({ id, eng })).sort(() => Math.random() - 0.5);


  return { wordsUkr ,wordsEng };
};
