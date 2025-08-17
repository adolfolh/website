import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const gradients = [
  { name: 'Default', className: 'p-8' },
  { name: 'Sunrise', className: 'p-8 gradient-sunrise' },
  { name: 'Sunset', className: 'p-8 gradient-sunset' },
  { name: 'Sky', className: 'p-8 gradient-sky' },
  { name: 'Forest', className: 'p-8 gradient-forest' },
  { name: 'Deep Blue', className: 'p-8 gradient-deep-blue' },
  { name: 'Purple Dream', className: 'p-8 gradient-purple-dream' },
];

const StyledContent = () => (
    <CardContent>
        <h1>This is an H1 Heading</h1>
        <h2>This is an H2 Heading</h2>
        <h3>This is an H3 Heading</h3>
        <h4>This is an H4 Heading</h4>
        <h5>This is an H5 Heading</h5>
        <h6>This is an H6 Heading</h6>
        <br/>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <br/>
        <a href="#">This is a link styled with the primary color.</a>
        <br/>
        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. <strong>Excepteur sint occaecat</strong> cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est <em>laborum sed ut perspiciatis</em> unde omnis iste natus error.</p>
        <br/>
        <ul className="list-disc">
        <li>Lorem ipsum dolor sit amet</li>
        <li>Consectetur adipiscing elit with <a href="#">a nested link</a></li>
        <li>Sed do eiusmod tempor incididunt</li>
        </ul>
        <br/>
        <ol className="list-decimal">
        <li>Ut labore et dolore magna aliqua</li>
        <li>Ut enim ad minim veniam quis</li>
        <li>Nostrud exercitation ullamco laboris</li>
        </ol>
        <br/>
        <blockquote>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </blockquote>
        <br/>
        <small>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</small>
        <br/>
        <div>
          <span className="accent">Lorem ipsum dolor sit amet consectetur adipiscing elit.</span>
        </div>
        <br/>
        <div>
          <span className="highlight">Sed do eiusmod tempor incididunt ut labore et dolore magna.</span>
        </div>
        <br/>
        <div>
          <span className="serif-heading">Ut enim ad minim veniam quis nostrud exercitation.</span>
        </div>
    </CardContent>
);

const Page = () => (
  <>
    {gradients.map(({ name, className }) => (
      <Card key={name} className={`${className} m-10`}>
        <StyledContent />
      </Card>
    ))}
  </>
);

export default Page;
