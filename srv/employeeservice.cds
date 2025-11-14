using {ust.saikumar.erothu.db as db} from '../db/schema';

service EmployeeService{
    entity employee as projection on db.employee;
}