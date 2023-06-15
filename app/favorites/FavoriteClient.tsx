
import ClientOnly from "../components/ClientOnly";
import ListingCard from "../components/listings/ListingCard";
import Container from '@/app/components/Container';
import { SafeListing, SafeUser } from "../types";
import Heading from '../components/Heading';

interface FavoriteClientProps {
  listings: SafeListing[];
  currentUser?: SafeUser | null;
}


const FavoriteClient: React.FC<FavoriteClientProps> = ({
  listings,
  currentUser
}) => {
  return (
    <ClientOnly>
      <Container>
        <Heading
          title="Favorites"
          subtitle="List of places you have favorited!"
        />
        <div
          className="
              pt-24
              grid
              grid-cols-1
              sm:grid-cols-2
              md:grid-cols-3
              lg:grid-cols-4
              xl:grid-cols-5
              2xl:grid-cols-6
              gap-8
            "
        >
          {listings.map((listing: any) => {
            return (
              <ListingCard
                currentUser={currentUser}
                key={listing.id}
                data={listing}
              />
            )
          })}
        </div>
      </Container>
    </ClientOnly>
  );
}

export default FavoriteClient;