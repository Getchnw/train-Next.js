const AboutpageDetails = async ({params}) => {
    const {id} = await params;
    console.log(id);
    return (
        <div>
            AboutpageDetails <br />
            {id}
        </div>
        
    )
}
export default AboutpageDetails