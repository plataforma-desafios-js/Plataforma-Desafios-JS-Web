/**
 * Essa função retorna uma função handler pra lidar com entradas de textos
 * 
 * @param setter A função setState pra entrada desejada
 * @returns A funçao q sera chamada no evento change da entrada
 */ 
export const inputHandler = (setter: React.Dispatch<React.SetStateAction<string>>) => (
    
    // Essa função muda os valores dos states de cada input
    (e: React.ChangeEvent<HTMLInputElement>) => {
        setter(e.target.value);
    }
);
