export interface ServiceOption {
    title: string;
    price: number;
}

export interface ServiceData {
    title: string;
    description: string;
    images: string[];
    skills: string[];
    options: ServiceOption[];
}

export interface Props {
    data: ServiceData;
}