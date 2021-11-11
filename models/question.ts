
export type CardTree = {
 id?:number,
titleCard:string,
}


export type addResult = " succeed to Added " | "Failed to add "
export type deleteResult = "succeed to delete " | "Faield to delete "
export type updaterRsult = "update" | "Faield to update "

export type GetAllCardTree = (qustionId: CardTree['id']) => Promise<CardTree[]>;
export type GetCardTreeById = (qustionId: CardTree['id']) => Promise<CardTree>;
export type AddCardTree = (CardTreeObj: CardTree) => Promise<string>;
export type EditCardTree = (CardTreeObj: CardTree) => Promise<string>;
export type DeleteCardTree = (idCardTree: CardTree['id']) => Promise<string>;