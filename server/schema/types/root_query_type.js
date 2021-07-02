const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID } = graphql;
const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: { 
      type: UserType,
      resolve(parentValue, args, req) {
        return req.user; //passport populates the user property on the request object. If they are not authenticated req.user will be null or undefined
      }
    }
  }
});

module.exports = RootQueryType;
