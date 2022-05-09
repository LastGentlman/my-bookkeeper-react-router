import { Outlet, useSearchParams } from "react-router-dom"
import QueryNavLink from "../components/QueryNavLink";
import { getInvoices } from "../data"
import styles from './invoices.module.css'

export default function invoices() {
    let invoices = getInvoices();
    let [searchParams, setSearchParams] = useSearchParams();

    return(
        <div className={styles.container}>
            <nav className={styles.nav}>
                <input value={searchParams.get('filter') || '' }
                    onChange={(e) => {
                        let filter = e.target.value;
                        if (filter) {
                            setSearchParams({filter})
                        }
                        else {
                            setSearchParams({})
                        }
                }} />
                {invoices
                    .filter(((invoice) => {
                        let filter = searchParams.get('filter');
                        if (!filter) return true;
                        let name =invoice.name.toLowerCase();
                        return name.startsWith(filter.toLowerCase());
                    }))
                    .map((invoice) => (
                        <QueryNavLink
                            style={({isActive}) => ({
                                display: 'block',
                                margin: '1rem 0',
                                color: isActive ? 'brown' : 'blue',
                            })}
                            to={`/invoices/${invoice.number}`}
                            key={invoice.number}>
                                {invoice.name}                      
                        </QueryNavLink>
                ))}
            </nav>
            <Outlet />
        </div>
    )
}