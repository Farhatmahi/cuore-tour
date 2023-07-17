export interface ITour {
    title: string;
    tags: string[];
    images: string[];
    shortDescription: string;
    overview: IOverview[];
    whatsIncluded: string[];
    experience: IExperience[];
}

interface IOverview  {
    title : string
    description : string
}

interface IExperience  {
    fullDescription : string
    highlights : string[]
    importantInformations : IImportantInformations[]
}

interface IImportantInformations  {
    whatToBring? : string[]
    notAllowed? : string[]
    knowBeforeYouGo? : string[]
}