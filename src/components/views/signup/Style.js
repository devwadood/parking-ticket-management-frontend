
const  backgroundImageUrl = '../../assets/images/background.jpg';
export const styles = {
    classes: {
        outer:"container-image flex flex-col md:grid md:grid-cols-3 md:grid-rows-1 md:gap-10 p-4 sm:p-0",
        inner:"inner-container m-auto md:row-span-1 md:col-span-1 md:row-start-1 md:row-end-1 md:col-start-2 md:col-end-2 p-8 rounded",
        heading:"m-4 my-8 font-mono text-center text-4xl text-blue-950"
    },
    styles: {
        container: {
            // backgroundImage: `url(${backgroundImageUrl})`,
            minWidth: "100vw",
            minHeight: "100vh",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
        }
    }
}