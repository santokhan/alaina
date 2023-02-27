import { Breadcrumbs, Link, Typography } from '@mui/material';
import Container from './layouts/Container';
import { useLocation } from 'react-router';

export default function BreadCrumb() {
  const { pathname } = useLocation();
  let pathnameArr = pathname.split('/').filter((n) => n);

  return (
    <div className="bg-gray-100 py-4">
      <Container>
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          {pathnameArr.map((item, i) => (
            <Link
              key={i}
              underline="hover"
              color="inherit"
              href={pathname}
              className="capitalize"
            >
              {item}
            </Link>
          ))}
          {/* <Typography color="text.primary">Breadcrumbs</Typography> */}
        </Breadcrumbs>
      </Container>
    </div>
  );
}
