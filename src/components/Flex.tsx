import React from 'react';

interface flexProps {
  className?: string;
  children: React.ReactNode
}

const Flex: React.FC<flexProps> = ({className, children}) => {
  return (
    <div className={`flex ${className}`}>{children}</div>
  )
}

export default Flex;
