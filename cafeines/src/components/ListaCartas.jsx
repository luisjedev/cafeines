import Carta from "./Carta"

const ListaCartas = () => {

    const PRODUCT_INITIAL_STATE = {
        titulo: "Gofre",
        precio: 56,
        descripcion: "Gofre cremita aes",
        imagen: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAFwAXAMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABQYHAwQCAf/EADQQAAEDAgQFAgQFBAMAAAAAAAEAAgMEEQUhMUEGElFhcROBIjKRoRRikrHBB0LR8BUjJP/EABcBAQEBAQAAAAAAAAAAAAAAAAABAgP/xAAZEQEBAQEBAQAAAAAAAAAAAAAAARESQTH/2gAMAwEAAhEDEQA/ANxREQEREBERAREQEREBERAREQEREBERAREQEREBERBA4hxPS0z444GGYvJAeTysy2B3PTLPNeTCuL2VdfHSVMDInyP5ByS81nbbC4PX7LNcTrp5JZaek+GFzhawsA6+YvtoMl84PO7DsWZVOlibNEeeIOF2uJBbY9bdlmVcbqi5Ur3S08UkjCx72Nc5p/tJGigMfxt7XT0VA+NszWlpkLsw62g9t9rrSLC+WOMEvkY0DW7gFGO4iwxr+X13EbPbG5zT4ICzakgc10klbTNaHAlz3kF3jK/1XpqKwUsTJHxOEbjZwvm0bZfwsdLjT6SrgrIvVppWyMva7dj0PQrusq4b4rjwrGJxU8zaCotzkC5jcBYOsPofbotRgmjqImywva+N4u1zTcELcR0UXjuLtwyFgZGJKiW/psJsLDUk9BcefuJRZR/UfFZ4uIOVzXsjpo7CzdiA7m73z/SlImHY7VitZJ673zjPluQzl3BaMrbXzPdWii4hoKiAPllbTPvZ0cpsR46jus9w+qElE2X55nn4x1d0HYBetkJc0GUte7c2+y59WNY54tTzQw1NPLHaaPIttfPLMdcswvX/AE7bROxGUVUQ/GhvPTl3ygaO5fzDr0OW6sPFtBzPhrWm2XpSfu0/W49wqsw/hZYqiIcpp5mvJGwB+L7XT5TxpVUZRTymnAMwY70wdC62X3WbsFXiBqo46JpjprPeSbSOc7mLjp81wb5g3Vn4k4m/46Z1LSNY+ZjQXucCQ2+gsN7Z+49qhR43N6Ms7571FTK5r2QNAcSHHIdP9zWrYkc4K6OeibUU8UlUxwvFtfK7T4sdfC/Mbw9sFRTuFTHUxmkm/EHX05RymPlA0HzDvvdfsTpWRsipKKOnjYOVge4WaOwF/wBwvJi5qYYOZ1W57nasLQGnxbMfdZioVjBJOGueGgnU6BW/C6mso6AU0GJPIYS5nI7lDb56b673VH9RxmjBYWhxtrcl2w8arZeE+H6fD+H6Wmq6SF01i+QPjBILje3sLD2W7CoKXHMRrI/RquVoAAvCS0Sd3b9raZewg8Qw6CoBeYYmyjSQ7DwNVoVTw1h0zw+JjqY7iCzQfYgj6LnHwphbSDKJ5rbSSm30Fgs5UZxgeCYpUVEsmCsa9rAWyOmNoz2HQ9h2vZWiHhLEJow+pbCJTqHzG47fCLK8wwxwRtihY2ONos1jRYAdgvtXmGuVTBHUwPhmbzRvFnBVCs4VqaWSeejmdVskPMYn2Dx4OQO3TTdXRFbNRTsG4ZFQ71sSgdHE03bATbnPV1tu2/jWbxDh3DK50Uj6Zsc0ItHLF8DmixAGWRFicjkpZEkGe4tguOUT/wDxUbKuMg/9kbgD+kkfyq43hniWvqgH0UrebUykMY3yf8XWyokmLqr8M8G0eEWqKrkq6292yOZ8MR/IDoe+vjRWhEVQREQEREBERAREQEREBERAREQEREH/2Q==",
    }

    const CATEGORY_INITIAL_STATE = {
        titulo: "Categoria 1",
        imagen: "./assets/geodude.png"
    }


    return(
        <div className="grid grid-cols-2">
            <Carta tipo="categoria" data={CATEGORY_INITIAL_STATE}/>
            <Carta tipo="producto" data={PRODUCT_INITIAL_STATE}/>
            <Carta tipo="categoria" data={CATEGORY_INITIAL_STATE}/>
            <Carta tipo="producto" data={PRODUCT_INITIAL_STATE}/>
            <Carta tipo="producto" data={PRODUCT_INITIAL_STATE}/>
            <Carta tipo="categoria" data={CATEGORY_INITIAL_STATE}/>
        </div>
    )
}
export default ListaCartas
