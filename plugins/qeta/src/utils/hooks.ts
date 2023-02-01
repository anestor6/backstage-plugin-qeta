import { QetaApi, qetaApiRef } from '../api';
import { useAsync } from 'react-use';
import {
  IdentityApi,
  identityApiRef,
  useApi,
} from '@backstage/core-plugin-api';
import { makeStyles } from '@material-ui/core';
import { CatalogApi } from '@backstage/catalog-client';
import { catalogApiRef } from '@backstage/plugin-catalog-react';

export function useQetaApi<T>(
  f: (api: QetaApi) => Promise<T>,
  deps: any[] = [],
) {
  const qetaApi = useApi(qetaApiRef);

  return useAsync(async () => {
    return await f(qetaApi);
  }, deps);
}

export function useCatalogApi<T>(
  f: (api: CatalogApi) => Promise<T>,
  deps: any[] = [],
) {
  const catalogApi = useApi(catalogApiRef);

  return useAsync(async () => {
    return await f(catalogApi);
  }, deps);
}

export function useIdentityApi<T>(
  f: (api: IdentityApi) => Promise<T>,
  deps: any[] = [],
) {
  const identityApi = useApi(identityApiRef);

  return useAsync(async () => {
    return await f(identityApi);
  }, deps);
}

export const useStyles = makeStyles(theme => {
  return {
    markdownEditor: {
      backgroundColor: 'initial',
      color: theme.palette.text.primary,
      border: `1px solid ${theme.palette.action.disabled}`,
      borderRadius: theme.shape.borderRadius,
      '&:hover': {
        borderColor: theme.palette.action.active,
      },
      '&:focus-within': {
        borderColor: theme.palette.primary.main,
      },
      '& .mde-header': {
        backgroundColor: 'initial',
        color: theme.palette.text.primary,
        borderBottom: `1px solid ${theme.palette.action.selected}`,
        '& .mde-tabs button, .mde-header-item > button': {
          color: `${theme.palette.text.primary} !important`,
        },
      },
      '& .mde-text': {
        backgroundColor: 'initial',
        color: theme.palette.text.primary,
        outline: 'none',
      },
    },
    markdownEditorError: {
      border: `1px solid ${theme.palette.error.main} !important`,
    },
    successColor: {
      color: theme.palette.success.main,
    },
    questionCardVote: {
      textAlign: 'center',
      width: '50px',
      marginRight: '20px',
      display: 'inline-block',
      verticalAlign: 'top',
    },
    questionCardContent: {
      display: 'inline-block',
      width: 'calc(100% - 70px)',
    },
    questionCardAuthor: {
      textAlign: 'right',
    },
    questionListPagination: {
      marginTop: theme.spacing(2),
    },
    postButton: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1),
    },
    questionsPerPageInput: {
      paddingTop: '10px',
    },
    questionsPerPage: {
      marginRight: theme.spacing(3),
    },
    questionHighlightList: {
      width: '100%',
      border: `1px solid ${theme.palette.action.selected}`,
      borderRadius: theme.shape.borderRadius,
      '&:not(:first-child)': {
        marginTop: theme.spacing(2),
      },
    },
    filterPanel: {
      border: `1px solid ${theme.palette.action.selected}`,
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(3),
    },
    questionCardMetadata: {
      width: '100%',
      marginTop: theme.spacing(3),
    },
    marginRight: {
      marginRight: theme.spacing(1),
    },
    questionCardActions: {
      marginTop: theme.spacing(2),
      '& a': {
        marginRight: theme.spacing(1),
      },
    },
    menuIcon: {
      minWidth: '26px',
    },
    deleteModal: {
      position: 'absolute',
      top: '20%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      backgroundColor: theme.palette.background.default,
      border: `1px solid ${theme.palette.action.selected}`,
      borderRadius: theme.shape.borderRadius,
      padding: theme.spacing(2),
      '& button': {
        marginTop: theme.spacing(2),
        float: 'right',
      },
    },
  };
});
