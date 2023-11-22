import {Link} from 'react-router-dom'

export default function ProjectPage() {
    return (
        <div class="p-8">
            {/* {header} */}
            <div className="p-6">
                <h2 className="mb-5 text-3xl font-semibold text-white-700">Versões #</h2>
                <Link to="/produtos" className="text-sm text-teal-600 hover:text-red-700">
                Voltar
                </Link>
            </div>

        </div>
    
    )
}
