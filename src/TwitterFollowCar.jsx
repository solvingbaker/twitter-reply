
// eslint-disable-next-line react/prop-types, no-unused-vars
export function TwitterFollowCar({ children, userName, isFollowing }) {
    const text = isFollowing ? 'Siguiendo' : ' Seguir';
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/${userName}`}
                    alt='Avatar user' />
                <div className='tw-followCard-info'>
                    <strong>{children}</strong>
                    <span className='tw-followCard-infoUsername'>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName}>
                    {text}
                </button>
            </aside>
        </article>
    )
}