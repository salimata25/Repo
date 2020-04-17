/**
 * Created by PC on 28/03/2019.
 */
export interface iOperation {
    status: number;
    message: string;
    numeroTransaction: string;
    codeVendeur : string ;
    expirationDate : string ;
    libelle : string ;
    numero : string ;
    prixU : number ;
    quantite : number ;
    transactionDate : string ;
    numeroDossier: string ;
    libelleDossier: string;
    receptionRecuConsumer: string;
    moyenReceptionRecuConsumer: string;
}
  