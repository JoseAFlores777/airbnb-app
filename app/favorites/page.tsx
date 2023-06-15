import getCurrentUser from "../actions/getCurrentUser";
import { getFavoriteListings } from "../actions/getFavoriteListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import FavoriteClient from './FavoriteClient';


const FavoritesPage = async () => { 

  const listings = await getFavoriteListings();
  const currentUser = await getCurrentUser();

  if (listings.length === 0) {
    return (
      <ClientOnly>
        <EmptyState
          title="No favorites found"
          subtitle="Looks loke you have no favorite listings."
        />
      </ClientOnly>
    )
  }
  
  return (
    <ClientOnly>
      <FavoriteClient
        listings={listings}
        currentUser={currentUser}
      />
    </ClientOnly>
  )


};

export default FavoritesPage;