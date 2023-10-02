const SectionTitle = (props) => {

    const { sectionTitle } = props;

    return (
        <div className="mb-4">
            <text className="font-bold text-xl lg:text-2xl mb-5">{sectionTitle}</text>
        </div>
    )

}

export default SectionTitle;