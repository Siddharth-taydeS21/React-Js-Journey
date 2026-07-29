export default function Button({imageUrl, title}){
    return <button className="btn" title={title}>
        <img src={imageUrl} alt="image" />
    </button>
}