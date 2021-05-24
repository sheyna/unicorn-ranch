import PropTypes from 'prop-types';

function UnicornLocationMarker(props) {
    const unic = props.unic;
    return (
        <li>{unic.name}
            <select
                name={unic.name + "-location"}
                id={unic.name}
                value={unic.location}
                onChange={(e) => props.moveUnicorn(e, unic.name)}
            >
                <option value="Barn">Barn</option>
                <option value="Pasture">Pasture</option>
                <option value="Trails">Trails</option>
            </select>
        </li>
    )
}

export default UnicornLocationMarker;

UnicornLocationMarker.propTypes = {
    unic: PropTypes.shape({
        name: PropTypes.string,
        location: PropTypes.string
    }),
    moveUnicorn: PropTypes.func
}