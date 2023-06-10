export default defineEventHandler(async(event)=>{
     const { code }=event.context.params
    const { currenyKey } = useRuntimeConfig()
     const uri = `https://api.currencyapi.com/v3/latest?currencies=${code}&apikey=${currenyKey}`

     const { data } = await $fetch(uri)

     return data
    })  


