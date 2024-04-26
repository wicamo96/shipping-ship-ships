const database = {
    docks: [
        {
            id: 1,
            location: "Shanghai, China",
            volume: "43.5"
        },
        {
            id: 2,
            location: "Busan, South Korea",
            volume: "21.6"
        },
        {
            id: 3,
            location: "Rotterdam, The Netherlands",
            volume: "14.35"
        },
        {
            id: 4,
            location: "Antwerp, Belgium",
            volume: "12.04"
        },
    ],
    haulingShips: [
        {
            id: 1,
            dockId: 3,
            name: "Pioneering Spirit"
        },
        {
            id: 2,
            dockId: 1,
            name: "Boaty Mcboatface"
        },
        {
            id: 3,
            dockId: 2,
            name: "Seawise Giant"
        },
        {
            id: 4,
            dockId: 4,
            name: "Titanic"
        },
        {
            id: 5,
            dockId: 3,
            name: "Hauley Mchauler"
        },
        {
            id: 6,
            dockId: 1,
            name: "Holey Ship!"
        }
    ],
    cargoShips: [
        {
            id: 1,
            haulerId: 3,
            name: "Esso Atlantic"
        },
        {
            id: 2,
            haulerId: 2,
            name: "Prairial"
        },
        {
            id: 3,
            haulerId: 6,
            name: "Palais Royal"
        },
        {
            id: 4,
            haulerId: 5,
            name: "Rivoli"
        },
        {
            id: 5,
            haulerId: 1,
            name: "Champs Elysee"
        },
        {
            id: 6,
            haulerId: 3,
            name: "Ever Ace"
        },
        {
            id: 7,
            haulerId: 2,
            name: "Nissei Maru"
        },
        {
            id: 8,
            haulerId: 4,
            name: "MSC Gulsun"
        },
        {
            id: 9,
            haulerId: 1,
            name: "HMM Rotterdam"
        },
        {
            id: 10,
            haulerId: 6,
            name: "CMA CGM Trocadero"
        }
    ]
}

export const getDocks = () => {
    return database.docks.map(docks => ({...docks}));
}

export const getHaulers = () => {
    return database.haulingShips.map(haulingShips => ({...haulingShips}));
}

export const getShips = () => {
    return database.cargoShips.map(cargoShips => ({...cargoShips}));
}