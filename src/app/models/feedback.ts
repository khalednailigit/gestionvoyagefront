import { Rating } from "./rating";
import { RendezvousF } from "./rendezvousfeedback";

export class FeedBack {
    id: number ;
    title: string;
    text: string;
    date: string;
    idUser: number;
    rating: Rating;
    rendezvous:RendezvousF;
    
  }
  