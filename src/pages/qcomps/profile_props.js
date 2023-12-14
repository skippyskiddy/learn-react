export default function Profile({ name, img, width, height, profile, awards, discovered }) {
    return (
    <section className="profile">
        <h2>{name}</h2>
        <img
            className="avatar"
            src={img}
            alt={name}
            width={width}
            height={height}
        />
        <ul>
            <li>
            <b>Profession: </b>
            {profile}
            </li>
            <li>
            <b>Awards: {awards.length} </b>
            ({awards})
            </li>
            <li>
            <b>Discovered: </b>
            {discovered}
            </li>
        </ul>
    </section>
    );
}