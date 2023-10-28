import React from 'react';

const ServiceBlock = ({imageSrc, serviceName, linkHref}) => {
  return (
    <div className="col-sm-6 col-md-4">
      <div className="feature-box-8">
        <div className="media">
          <a href={linkHref}>
            <img
              src={imageSrc}
              alt={serviceName}
              className="img-responsive" />
          </a>
        </div>
        <div className="body">
          <a href="/" className="title">{serviceName}</a>
        </div>
      </div>
    </div>
  );
};

export default ServiceBlock;