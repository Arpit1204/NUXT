export default defineEventHandler(async(event)=>{

    // const { name } = useQuery(event)
    

    // const { age } = await readBody(event)


    const {data} = await $fetch("https://api.currencyapi.com/v3/latest?apikey=G4vD962NjZa4gruI1HpmZvHHN9M0N5gknZSESC6e")

    return data
})