export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      Agent: {
        Row: {
          created_at: string
          id: number
          id_user: string | null
          nomAgent: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_user?: string | null
          nomAgent?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          id_user?: string | null
          nomAgent?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Agent_id_user_fkey"
            columns: ["id_user"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      Basket: {
        Row: {
          bande: string | null
          created_at: string
          empeigne: string | null
          id: number
          lacet: string | null
          languette: string | null
          oeillet: string | null
          pointe: string | null
          semelle: string | null
          trimestre: string | null
        }
        Insert: {
          bande?: string | null
          created_at?: string
          empeigne?: string | null
          id?: number
          lacet?: string | null
          languette?: string | null
          oeillet?: string | null
          pointe?: string | null
          semelle?: string | null
          trimestre?: string | null
        }
        Update: {
          bande?: string | null
          created_at?: string
          empeigne?: string | null
          id?: number
          lacet?: string | null
          languette?: string | null
          oeillet?: string | null
          pointe?: string | null
          semelle?: string | null
          trimestre?: string | null
        }
        Relationships: []
      }
      CastDeFilm: {
        Row: {
          cast_id: number
          film_id: number
        }
        Insert: {
          cast_id: number
          film_id: number
        }
        Update: {
          cast_id?: number
          film_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "castdefilm_cast_id_fkey"
            columns: ["cast_id"]
            isOneToOne: false
            referencedRelation: "Celebrite"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "castdefilm_film_id_fkey"
            columns: ["film_id"]
            isOneToOne: false
            referencedRelation: "Film"
            referencedColumns: ["id"]
          },
        ]
      }
      Celebrite: {
        Row: {
          created_at: string
          date_mort: string | null
          date_naissance: string | null
          genre: string | null
          id: number
          lieu_naissance: string | null
          nom: string | null
          portrait: string | null
          prenom: string | null
        }
        Insert: {
          created_at?: string
          date_mort?: string | null
          date_naissance?: string | null
          genre?: string | null
          id?: number
          lieu_naissance?: string | null
          nom?: string | null
          portrait?: string | null
          prenom?: string | null
        }
        Update: {
          created_at?: string
          date_mort?: string | null
          date_naissance?: string | null
          genre?: string | null
          id?: number
          lieu_naissance?: string | null
          nom?: string | null
          portrait?: string | null
          prenom?: string | null
        }
        Relationships: []
      }
      Commune: {
        Row: {
          created_at: string
          id: number
          nomCommune: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          nomCommune?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          nomCommune?: string | null
        }
        Relationships: []
      }
      Film: {
        Row: {
          banniere: string | null
          cover: string | null
          created_at: string
          date_sortie: string | null
          duree: string | null
          id: number
          nom_original: string | null
          nom_traduit: string | null
          note: number | null
          synopsis: string | null
        }
        Insert: {
          banniere?: string | null
          cover?: string | null
          created_at?: string
          date_sortie?: string | null
          duree?: string | null
          id?: number
          nom_original?: string | null
          nom_traduit?: string | null
          note?: number | null
          synopsis?: string | null
        }
        Update: {
          banniere?: string | null
          cover?: string | null
          created_at?: string
          date_sortie?: string | null
          duree?: string | null
          id?: number
          nom_original?: string | null
          nom_traduit?: string | null
          note?: number | null
          synopsis?: string | null
        }
        Relationships: []
      }
      Genre: {
        Row: {
          created_at: string
          id: number
          nom: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          nom?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          nom?: string | null
        }
        Relationships: []
      }
      GenreDeFilm: {
        Row: {
          film_id: number
          genre_id: number
        }
        Insert: {
          film_id: number
          genre_id: number
        }
        Update: {
          film_id?: number
          genre_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "genredefilm_film_id_fkey"
            columns: ["film_id"]
            isOneToOne: false
            referencedRelation: "Film"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "genredefilm_genre_id_fkey"
            columns: ["genre_id"]
            isOneToOne: false
            referencedRelation: "Genre"
            referencedColumns: ["id"]
          },
        ]
      }
      Maison: {
        Row: {
          adresse: string | null
          created_at: string
          favori: boolean | null
          id: number
          id_Agent: number | null
          id_Quartier: number | null
          image: string | null
          nbrChambres: number | null
          nbrSDB: number | null
          nomMaison: string | null
          prix: number | null
          surface: string | null
        }
        Insert: {
          adresse?: string | null
          created_at?: string
          favori?: boolean | null
          id?: number
          id_Agent?: number | null
          id_Quartier?: number | null
          image?: string | null
          nbrChambres?: number | null
          nbrSDB?: number | null
          nomMaison?: string | null
          prix?: number | null
          surface?: string | null
        }
        Update: {
          adresse?: string | null
          created_at?: string
          favori?: boolean | null
          id?: number
          id_Agent?: number | null
          id_Quartier?: number | null
          image?: string | null
          nbrChambres?: number | null
          nbrSDB?: number | null
          nomMaison?: string | null
          prix?: number | null
          surface?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Maison_id_Agent_fkey"
            columns: ["id_Agent"]
            isOneToOne: false
            referencedRelation: "Agent"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Maison_id_Quartier_fkey"
            columns: ["id_Quartier"]
            isOneToOne: false
            referencedRelation: "Quartier"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Maison_id_Quartier_fkey"
            columns: ["id_Quartier"]
            isOneToOne: false
            referencedRelation: "quartier_commune"
            referencedColumns: ["id_Quartier"]
          },
        ]
      }
      members: {
        Row: {
          team_id: number
          user_id: number
        }
        Insert: {
          team_id: number
          user_id: number
        }
        Update: {
          team_id?: number
          user_id?: number
        }
        Relationships: [
          {
            foreignKeyName: "members_team_id_fkey"
            columns: ["team_id"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "members_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      Quartier: {
        Row: {
          created_at: string
          id: number
          id_Commune: number | null
          nomQuartier: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          id_Commune?: number | null
          nomQuartier?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          id_Commune?: number | null
          nomQuartier?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "public_Quartier_id_Commune_fkey"
            columns: ["id_Commune"]
            isOneToOne: false
            referencedRelation: "Commune"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Quartier_id_Commune_fkey"
            columns: ["id_Commune"]
            isOneToOne: false
            referencedRelation: "quartier_commune"
            referencedColumns: ["id"]
          },
        ]
      }
      teams: {
        Row: {
          id: number
          team_name: string | null
        }
        Insert: {
          id?: number
          team_name?: string | null
        }
        Update: {
          id?: number
          team_name?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          id: number
          name: string | null
        }
        Insert: {
          id?: number
          name?: string | null
        }
        Update: {
          id?: number
          name?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      quartier_commune: {
        Row: {
          id: number | null
          id_Quartier: number | null
          nomCommune: string | null
          nomQuartier: string | null
        }
        Relationships: []
      }
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never
