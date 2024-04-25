const Aside = () => {
    return <aside>
        <form>
            <div className="mb-3">
                <label className="form-label">Nombres</label>
                <input type="text" className="form-control" required ></input>
            </div>
            <div className="mb-3">
                <label className="form-label">Email</label>
                <input type="text" className="form-control" placeholder="example@gmail.com" ></input>
            </div>
            <div className="mb-3">
                <label for="exampleInputPassword1" className="form-label">Contraseña</label>
                <input type="password" className="form-control" id="exampleInputPassword1"></input>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"></input>
                <label className="form-check-label" for="exampleCheck1">Recordarme</label>
            </div>
            
            <button type="submit" className="btn btn-primary">Enviar
                <i  data-feather="arrow-right"></i></button>
        </form>
    </aside>;
}

export default Aside;