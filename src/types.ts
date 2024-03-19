export interface Basket {
  semelle?: string;
  empeigne?: string;
  pointe?: string;
  oeillet?: string;
  bande?: string;
  languette?: string;
  lacet?: string;
  trimestre?: string;
}


export const colors = {
  "#000000": "Noir",
  "#FFFFFF": "Blanc",
  "#FF0000": "Rouge",
  "#00FF00": "Vert",
  "#0000FF": "Bleu",
  "#FFFF00": "Jaune",
  "#FF00FF": "Magenta",
  "#00FFFF": "Cyan",
  "#C0C0C0": "Gris clair",
  "#808080": "Gris",
  "#800000": "Marron",
  "#808000": "Olive",
};


export const materiaux = [
  {
    value: "https://images.unsplash.com/photo-1564842505181-8862a3b9b173?q=80&w=1768&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Cuir",
  },
  {
    value: "https://images.unsplash.com/photo-1616627502968-858f7b39f574?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Tissu",
  },
  {
    value: "https://images.unsplash.com/photo-1592823563234-622a0f2f6ec2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    label: "Synthétique",
  },
];