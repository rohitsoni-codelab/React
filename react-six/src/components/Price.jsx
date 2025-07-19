export default function Price({ newPrice, oldPrice }) {
    return (
        <div>
            <p>{oldPrice}</p>
            <p>{newPrice}</p>
        </div>
    );
}