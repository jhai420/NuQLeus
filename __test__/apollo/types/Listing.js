const { gql } = require('apollo-server');

module.exports = gql`
  type Listing {
    _id: ID!
    listing_url: String
    name: String!
    summary: String
    space: String
    description: String
    neighborhood_overview: String
    notes: String
    transit: String
    access: String
    interaction: String
    house_rules: String
    property_type: String
    room_type: String
    bed_type: String
    minimum_nights: String
    maximum_nights: String
    cancellation_policy: String
    last_scraped: String
    calendar_last_scraped: String
    accommodates: Int
    bedrooms: Int
    beds: Int
    number_of_reviews: Int
    bathrooms: Float
    amenities: [String]
    price: Float
    extra_people: Float
    guests_included: Int
    reviews: [String]
  }

  input CreateListingInput {
    _id: ID!
    listing_url: String
    name: String!
    summary: String
    space: String
    description: String
    neighborhood_overview: String
    notes: String
    transit: String
    access: String
    interaction: String
    house_rules: String
    property_type: String
    room_type: String
    bed_type: String
    minimum_nights: String
    maximum_nights: String
    cancellation_policy: String
    last_scraped: String
    calendar_last_scraped: String
    accommodates: Int
    bedrooms: Int
    beds: Int
    number_of_reviews: Int
    bathrooms: Float
    amenities: [String]
    price: Float
    extra_people: Float
    guests_included: Int
    reviews: [String]
  }

  input UpdateListingInput {
    listing_url: String
    name: String!
    summary: String
    space: String
    description: String
    neighborhood_overview: String
    notes: String
    transit: String
    access: String
    interaction: String
    house_rules: String
    property_type: String
    room_type: String
    bed_type: String
    minimum_nights: String
    maximum_nights: String
    cancellation_policy: String
    last_scraped: String
    calendar_last_scraped: String
    accommodates: Int
    bedrooms: Int
    beds: Int
    number_of_reviews: Int
    bathrooms: Float
    amenities: [String]
    price: Float
    extra_people: Float
    guests_included: Int
    reviews: [String]
  }

  input DeleteListingInput {
    id: ID!
    listing_url: String
    name: String!
    summary: String
    space: String
    description: String
    neighborhood_overview: String
    notes: String
    transit: String
    access: String
    interaction: String
    house_rules: String
    property_type: String
    room_type: String
    bed_type: String
    minimum_nights: String
    maximum_nights: String
    cancellation_policy: String
    last_scraped: String
    calendar_last_scraped: String
    accommodates: Int
    bedrooms: Int
    beds: Int
    number_of_reviews: Int
    bathrooms: Float
    amenities: [String]
    price: Float
    extra_people: Float
    guests_included: Int
    reviews: [String]
  }

  type DeletePayload {
    id: ID!
    listing_url: String
    name: String!
    summary: String
    space: String
    description: String
    neighborhood_overview: String
    notes: String
    transit: String
    access: String
    interaction: String
    house_rules: String
    property_type: String
    room_type: String
    bed_type: String
    minimum_nights: String
    maximum_nights: String
    cancellation_policy: String
    last_scraped: String
    calendar_last_scraped: String
    accommodates: Int
    bedrooms: Int
    beds: Int
    number_of_reviews: Int
    bathrooms: Float
    amenities: [String]
    price: Float
    extra_people: Float
    guests_included: Int
    reviews: [String]
  }

  #For a query,listing, take in an id, and return that listing
  #For listings, return an array of all listings
  type Query {
    listing(_id: ID!): Listing
    listings: [Listing]
  }

  #For createListing, take in a required input of what you want to create given the schema
  #Given the id and an input according to the schema, return an updated value for that listing
  #for an id, delete the payload written by the user
  type Mutation {
    createListing(input: CreateListingInput!): Listing!
    updateListing(id: ID!, input: UpdateListingInput!): Listing!
    deleteListing(id: ID!): DeletePayload!
  }
`;
