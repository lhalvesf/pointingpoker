import './style.css'
export function JoinSession() {
    return(<>
        <div>
            <h3>Join Session</h3>
            <form action="">
                <fieldset>
                    <div>
                        <label htmlFor="">Enter your name below and get to voting!</label>
                    </div>
                    <div>
                        <input type="text" placeholder='Your name' />
                        <input type="button" value={'Join'} />
                    </div>
                </fieldset>
            </form>
            <p>Session ID: xxx</p>
        </div>
    </>)
}