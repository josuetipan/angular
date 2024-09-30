import { Invoice } from "../model/Invoice";

export const invoice: Invoice = {
    id: "001",
    company: {
        ruc: "0011754772778",
        name: "ClearmindsConsultores",
        addresd: {
            city: "Quito",
            pricipalStreet: "Juan Pablo Sanz",
            secondaryStreet: "Iñaqito",
            code: "N-57"
        }
    },
    customer: {
        id: "17547727789",
        name: "Josue ",
        surname: "Tipan",
        addres: {
            city: "Quito",
            pricipalStreet: "Carmen Alto",
            secondaryStreet: "San Isidro del Inca",
            code: "N-57"
        }
    },
    items: [
        {
            id: 100,
            product: {
                id: 500,
                name: "Papas Fritas",
                price: 0.50,
                description: "Las papas saborsas",
                category: {
                    id: 120,
                    name: "Snacks"
                }
            },
            quantity: 23,
        },
        {
            id: 101,
            product: {
                id: 550,
                name: "Doritos",
                price: 0.60,
                description: "de queso",
                category: {
                    id: 125,
                    name: "Snacks"
                }
            },
            quantity: 50,
        },
        {
            id: 102,
            product: {
                id: 580,
                name: "cachitos",
                price: 0.30,
                description: "cachudos",
                category: {
                    id: 122,
                    name: "Snacks"
                }
            },
            quantity: 100,
        },

    ]

}