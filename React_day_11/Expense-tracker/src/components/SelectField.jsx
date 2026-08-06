export default function SelectField({ id, value, label, eventHandler, placeHolder, options, errorMsg }) {
    return (
        <label htmlFor={id}>
            {label} :
            <select
                name={id}
                id={id}
                value={value}
                onChange={eventHandler}
            >
                {placeHolder && <option value="" hidden>{placeHolder}</option>}
                {options.map((option, i) => <option key={i} value={option}>{option}</option>)}
            </select>
            <p className="errorMsg">{errorMsg}</p>
        </label>
    )
}
