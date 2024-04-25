import React, {FC} from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import {NavLink} from "react-router-dom";
import {styled} from "@mui/material";

interface BreadcrumbItem {
  href: string;
  label: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

const StyledNavLink = styled(NavLink)({
  color: 'inherit',
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  }
})

export const Breadcrumb: FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <div role="presentation" style={{ margin: '10px'}} onClick={(e) => e.preventDefault()}>
      <Breadcrumbs aria-label="breadcrumb">
        {items.map((item, index) => (
          <StyledNavLink key={index} color="inherit" to={item.href}>
            {item.label}
          </StyledNavLink>
        ))}
      </Breadcrumbs>
    </div>
  );
}
