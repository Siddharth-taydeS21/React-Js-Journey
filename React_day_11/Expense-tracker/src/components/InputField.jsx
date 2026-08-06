export default function InputField({ label, id, type, value, eventHandler, errorMsg}) {
    return (
        <label htmlFor={id}>
            {label} :
            <input
                type={type}
                name={id}
                id={id}
                placeholder={`Add ${id}`}
                value={value}
                onChange={eventHandler}
            // ref={titleRef}
            />
            <p className="errorMsg">{errorMsg}</p>
        </label>
    )
}
