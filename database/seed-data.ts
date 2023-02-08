
interface SeedData {
    entries: SeedEntry[];
}

interface SeedEntry {
    description:string;
    status:string;
    createdAt: number;
}

export const seedData:SeedData ={
    entries:[
        {
            
            description:'pending pepe bladasdasd',
            status:'pending',
            createdAt: Date.now()
        },
        {
            
            description:'in-progress pepe bladasdasd',
            status:'in-progress',
            createdAt: Date.now() - 1000000
        },
        {
            
            description:'finished lola bladasdasd',
            status:'finished',
            createdAt: Date.now() - 100000
        }
    ]

}