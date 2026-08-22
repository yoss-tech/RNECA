export const sistemaActivo = () => {
    const currentDate = new Date();
    const currentDay = currentDate.getDate();

    return currentDay >= 1 && currentDate <=5;
}