export const fetchDataScrapping = async (targetUrl: string) => {
    const URL = "http://localhost:5000/api/scraper";
    try {
        const data = await fetch(URL, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json', // Indicar que el cuerpo de la petición es JSON
            },
            body: JSON.stringify({ targetUrl }) // Asegúrate de enviar el cuerpo como un string JSON
        });

        if (!data.ok) throw new Error(`HTTP error! status: ${data.status}`);

        const response = await data.json(); // Esperar a que la promesa de .json() se resuelva
        return response;
    } catch (error) {
        console.error('Error:', error);
    }
};
