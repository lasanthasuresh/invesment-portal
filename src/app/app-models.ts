export class Company {
  id: number;
  name: string;
  value: number;
  decision: string;
  logo: string;
  diff: number;
  diff_percentage: number;
  data: any;
}

export class CompanyDetail extends Company {
  profile: CompanyProfile;
  stats: CompanyStats;
}

export class CompanyProfile {
  industry: string;
  sector: string;
  employee_count: number;
  equity_type: string;
  description: string;
  address: string;
  phone: string;
  fax: string;
  email: string;
  web: string;
  executives: Person[];
}

export class CompanyStats {

}

export class Person {
  name: string;
  title: string;
}
