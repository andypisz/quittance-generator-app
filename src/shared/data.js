const properties = [
    {
        id: 1,
        ownerId: 1,
        address1: "119 rue du Feretra",
        address2: "appartement 91",
        postalCode: "31400",
        city: "Toulouse"
    },
    {
        id: 2,
        ownerId: 1,
        address1: "1 rue Jean Mermoz",
        address2: "appartement 4F",
        postalCode: "31100",
        city: "Toulouse"
    },
    {
        id: 3,
        ownerId: 2,
        address1: "38 rue des Frères Quemere",
        address2: "",
        postalCode: "82150",
        city: "Montaigu-de-Quercy"
    }
];

const owners = [
    {
        id: 1,
        name: "Andy Piszyna",
        address1: "21 rue Jean Cocteau",
        address2: "",
        postalCode: "31140",
        city: "Aucamville"
    },
    {
        id: 2,
        name: "SCI APLN INVESTMENT",
        address1: "21 rue Jean Cocteau",
        address2: "",
        postalCode: "31140",
        city: "Aucamville"
    }
];

const tenants = [
    {
        id: 1,
        rentId: 1,
        name: "Kenza Bouzergan",
        addressAditionalContent: ""
    },
    {
        id: 2,
        rentId: 2,
        name: "Cian Latic",
        addressAditionalContent: ""
    },
    {
        id: 3,
        rentId: 2,
        name: "Léna Tétot",
        addressAditionalContent: ""
    },
    {
        id: 4,
        rentId: 3,
        name: "Eric Moll",
        addressAditionalContent: "appartement 7"
    },
    {
        id: 5,
        rentId: 3,
        name: "Marie Bals",
        addressAditionalContent: "appartement 1"
    },
    {
        id: 6,
        rentId: 3,
        name: "Sandrine Jonas",
        addressAditionalContent: "appartement 3"
    },
    {
        id: 7,
        rentId: 3,
        name: "Alain Champin",
        addressAditionalContent: "appartement 5"
    },
    {
        id: 8,
        rentId: 3,
        name: "Isabelle Cheneau",
        addressAditionalContent: "appartement 6"
    }
];

export const data = {
    properties, tenants, owners
}