interface IPerson {
    name: string;
    age: number;
}
const persons: IPerson[] = [{name:"chirs", age:34},{name:"peter", age:38}]
export const functions = {
    alle: ():IPerson[] => {
        return persons;
    },
    filter: (name:string):IPerson|undefined => {
        return persons.find((value)=> {
            return value.name === name;
        })
    }
}